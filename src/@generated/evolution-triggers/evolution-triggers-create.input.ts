import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseCreateNestedManyWithoutEvolution_triggersInput } from '../evolution-trigger-prose/evolution-trigger-prose-create-nested-many-without-evolution-triggers.input';
import { pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-evolution-triggers.input';

@InputType()
export class evolution_triggersCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => evolution_trigger_proseCreateNestedManyWithoutEvolution_triggersInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseCreateNestedManyWithoutEvolution_triggersInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput;
}
