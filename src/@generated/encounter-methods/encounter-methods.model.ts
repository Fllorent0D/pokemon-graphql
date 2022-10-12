import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { encounter_method_prose } from '../encounter-method-prose/encounter-method-prose.model';
import { encounter_slots } from '../encounter-slots/encounter-slots.model';
import { location_area_encounter_rates } from '../location-area-encounter-rates/location-area-encounter-rates.model';
import { Encounter_methodsCount } from '../prisma/encounter-methods-count.output';

@ObjectType()
export class encounter_methods {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [encounter_method_prose], {nullable:true})
    encounter_method_prose?: Array<encounter_method_prose>;

    @Field(() => [encounter_slots], {nullable:true})
    encounter_slots?: Array<encounter_slots>;

    @Field(() => [location_area_encounter_rates], {nullable:true})
    location_area_encounter_rates?: Array<location_area_encounter_rates>;

    @Field(() => Encounter_methodsCount, {nullable:false})
    _count?: Encounter_methodsCount;
}
