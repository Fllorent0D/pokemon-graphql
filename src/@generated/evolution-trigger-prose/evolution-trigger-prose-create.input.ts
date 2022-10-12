import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEvolution_trigger_proseInput } from '../languages/languages-create-nested-one-without-evolution-trigger-prose.input';
import { evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput } from '../evolution-triggers/evolution-triggers-create-nested-one-without-evolution-trigger-prose.input';

@InputType()
export class evolution_trigger_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEvolution_trigger_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEvolution_trigger_proseInput;

    @Field(() => evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput, {nullable:false})
    evolution_triggers!: evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput;
}
