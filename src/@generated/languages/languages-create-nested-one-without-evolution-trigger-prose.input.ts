import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEvolution_trigger_proseInput } from './languages-create-without-evolution-trigger-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEvolution_trigger_proseInput } from './languages-create-or-connect-without-evolution-trigger-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutEvolution_trigger_proseInput {

    @Field(() => languagesCreateWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEvolution_trigger_proseInput)
    create?: languagesCreateWithoutEvolution_trigger_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEvolution_trigger_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEvolution_trigger_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
