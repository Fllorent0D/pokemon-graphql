import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_methods } from '../encounter-methods/encounter-methods.model';
import { version_groups } from '../version-groups/version-groups.model';
import { encounters } from '../encounters/encounters.model';
import { Encounter_slotsCount } from '../prisma/encounter-slots-count.output';

@ObjectType()
export class encounter_slots {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:true})
    slot!: number | null;

    @Field(() => Int, {nullable:true})
    rarity!: number | null;

    @Field(() => encounter_methods, {nullable:false})
    encounter_methods?: encounter_methods;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;

    @Field(() => [encounters], {nullable:true})
    encounters?: Array<encounters>;

    @Field(() => Encounter_slotsCount, {nullable:false})
    _count?: Encounter_slotsCount;
}
