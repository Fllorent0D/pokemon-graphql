import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_conditions } from '../encounter-conditions/encounter-conditions.model';
import { encounter_condition_value_map } from '../encounter-condition-value-map/encounter-condition-value-map.model';
import { encounter_condition_value_prose } from '../encounter-condition-value-prose/encounter-condition-value-prose.model';
import { Encounter_condition_valuesCount } from '../prisma/encounter-condition-values-count.output';

@ObjectType()
export class encounter_condition_values {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => encounter_conditions, {nullable:false})
    encounter_conditions?: encounter_conditions;

    @Field(() => [encounter_condition_value_map], {nullable:true})
    encounter_condition_value_map?: Array<encounter_condition_value_map>;

    @Field(() => [encounter_condition_value_prose], {nullable:true})
    encounter_condition_value_prose?: Array<encounter_condition_value_prose>;

    @Field(() => Encounter_condition_valuesCount, {nullable:false})
    _count?: Encounter_condition_valuesCount;
}
