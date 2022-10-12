import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-create-without-encounter-condition-values.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-create-or-connect-without-encounter-condition-values.input';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';

@InputType()
export class encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput {

    @Field(() => [encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput)
    create?: Array<encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput)
    connectOrCreate?: Array<encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    connect?: Array<encounter_condition_value_proseWhereUniqueInput>;
}
