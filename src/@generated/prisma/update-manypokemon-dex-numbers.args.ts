import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersUpdateManyMutationInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersWhereInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where.input';

@ArgsType()
export class UpdateManypokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_dex_numbersUpdateManyMutationInput)
    data!: pokemon_dex_numbersUpdateManyMutationInput;

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    @Type(() => pokemon_dex_numbersWhereInput)
    where?: pokemon_dex_numbersWhereInput;
}
