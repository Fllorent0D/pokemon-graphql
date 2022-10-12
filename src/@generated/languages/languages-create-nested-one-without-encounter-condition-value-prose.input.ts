import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEncounter_condition_value_proseInput } from './languages-create-without-encounter-condition-value-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEncounter_condition_value_proseInput } from './languages-create-or-connect-without-encounter-condition-value-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutEncounter_condition_value_proseInput {

    @Field(() => languagesCreateWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEncounter_condition_value_proseInput)
    create?: languagesCreateWithoutEncounter_condition_value_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEncounter_condition_value_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEncounter_condition_value_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
