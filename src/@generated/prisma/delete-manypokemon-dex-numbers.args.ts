import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    @Type(() => pokemon_dex_numbersWhereInput)
    where?: pokemon_dex_numbersWhereInput;
}
