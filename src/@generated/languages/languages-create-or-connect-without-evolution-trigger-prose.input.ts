import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEvolution_trigger_proseInput } from './languages-create-without-evolution-trigger-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutEvolution_trigger_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutEvolution_trigger_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEvolution_trigger_proseInput)
    create!: languagesCreateWithoutEvolution_trigger_proseInput;
}
