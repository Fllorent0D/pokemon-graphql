import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsCreateInput } from '../pokemon-items/pokemon-items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonItemsArgs {

    @Field(() => pokemon_itemsCreateInput, {nullable:false})
    @Type(() => pokemon_itemsCreateInput)
    data!: pokemon_itemsCreateInput;
}
