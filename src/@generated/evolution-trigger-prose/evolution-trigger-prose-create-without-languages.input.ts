import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput } from '../evolution-triggers/evolution-triggers-create-nested-one-without-evolution-trigger-prose.input';

@InputType()
export class evolution_trigger_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput, {nullable:false})
    evolution_triggers!: evolution_triggersCreateNestedOneWithoutEvolution_trigger_proseInput;
}
