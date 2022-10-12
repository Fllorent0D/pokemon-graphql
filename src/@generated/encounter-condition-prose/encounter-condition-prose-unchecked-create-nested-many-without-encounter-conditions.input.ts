import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseCreateWithoutEncounter_conditionsInput } from './encounter-condition-prose-create-without-encounter-conditions.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput } from './encounter-condition-prose-create-or-connect-without-encounter-conditions.input';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';

@InputType()
export class encounter_condition_proseUncheckedCreateNestedManyWithoutEncounter_conditionsInput {

    @Field(() => [encounter_condition_proseCreateWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateWithoutEncounter_conditionsInput)
    create?: Array<encounter_condition_proseCreateWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput)
    connectOrCreate?: Array<encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    connect?: Array<encounter_condition_proseWhereUniqueInput>;
}
