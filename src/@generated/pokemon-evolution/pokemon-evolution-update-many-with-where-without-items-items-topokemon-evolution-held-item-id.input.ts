import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateManyMutationInput } from './pokemon-evolution-update-many-mutation.input';

@InputType()
export class pokemon_evolutionUpdateManyWithWhereWithoutItems_itemsTopokemon_evolution_held_item_idInput {

    @Field(() => pokemon_evolutionScalarWhereInput, {nullable:false})
    @Type(() => pokemon_evolutionScalarWhereInput)
    where!: pokemon_evolutionScalarWhereInput;

    @Field(() => pokemon_evolutionUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateManyMutationInput)
    data!: pokemon_evolutionUpdateManyMutationInput;
}
