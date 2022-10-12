import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEncounter_condition_proseInput } from './languages-create-without-encounter-condition-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEncounter_condition_proseInput } from './languages-create-or-connect-without-encounter-condition-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutEncounter_condition_proseInput {

    @Field(() => languagesCreateWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEncounter_condition_proseInput)
    create?: languagesCreateWithoutEncounter_condition_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEncounter_condition_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEncounter_condition_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
