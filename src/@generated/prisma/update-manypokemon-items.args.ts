import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsUpdateManyMutationInput } from '../pokemon-items/pokemon-items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_itemsWhereInput } from '../pokemon-items/pokemon-items-where.input';

@ArgsType()
export class UpdateManypokemonItemsArgs {

    @Field(() => pokemon_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateManyMutationInput)
    data!: pokemon_itemsUpdateManyMutationInput;

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    @Type(() => pokemon_itemsWhereInput)
    where?: pokemon_itemsWhereInput;
}
