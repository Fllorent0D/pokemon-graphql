import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutEvolution_triggersInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-evolution-triggers.input';

@InputType()
export class evolution_triggersUncheckedCreateWithoutEvolution_trigger_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutEvolution_triggersInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUncheckedCreateNestedManyWithoutEvolution_triggersInput;
}
