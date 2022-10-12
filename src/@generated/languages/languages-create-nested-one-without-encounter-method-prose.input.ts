import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEncounter_method_proseInput } from './languages-create-without-encounter-method-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEncounter_method_proseInput } from './languages-create-or-connect-without-encounter-method-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutEncounter_method_proseInput {

    @Field(() => languagesCreateWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEncounter_method_proseInput)
    create?: languagesCreateWithoutEncounter_method_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEncounter_method_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEncounter_method_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEncounter_method_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
