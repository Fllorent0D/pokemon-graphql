import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEvolution_trigger_proseInput } from '../languages/languages-create-nested-one-without-evolution-trigger-prose.input';

@InputType()
export class evolution_trigger_proseCreateWithoutEvolution_triggersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEvolution_trigger_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEvolution_trigger_proseInput;
}
