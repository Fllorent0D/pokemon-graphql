import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-evolution-triggers.input';

@InputType()
export class evolution_triggersCreateWithoutEvolution_trigger_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput;
}
