import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { encounter_condition_prose } from '../encounter-condition-prose/encounter-condition-prose.model';
import { encounter_condition_values } from '../encounter-condition-values/encounter-condition-values.model';
import { Encounter_conditionsCount } from '../prisma/encounter-conditions-count.output';

@ObjectType()
export class encounter_conditions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [encounter_condition_prose], {nullable:true})
    encounter_condition_prose?: Array<encounter_condition_prose>;

    @Field(() => [encounter_condition_values], {nullable:true})
    encounter_condition_values?: Array<encounter_condition_values>;

    @Field(() => Encounter_conditionsCount, {nullable:false})
    _count?: Encounter_conditionsCount;
}
