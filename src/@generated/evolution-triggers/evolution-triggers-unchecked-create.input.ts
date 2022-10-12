import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { evolution_trigger_proseUncheckedCreateNestedManyWithoutEvolution_triggersInput } from '../evolution-trigger-prose/evolution-trigger-prose-unchecked-create-nested-many-without-evolution-triggers.input';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutEvolution_triggersInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-evolution-triggers.input';

@InputType()
export class evolution_triggersUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => evolution_trigger_proseUncheckedCreateNestedManyWithoutEvolution_triggersInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUncheckedCreateNestedManyWithoutEvolution_triggersInput;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutEvolution_triggersInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUncheckedCreateNestedManyWithoutEvolution_triggersInput;
}
