import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_dex_numbersScalarWhereInput {

    @Field(() => [pokemon_dex_numbersScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_dex_numbersScalarWhereInput>;

    @Field(() => [pokemon_dex_numbersScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_dex_numbersScalarWhereInput>;

    @Field(() => [pokemon_dex_numbersScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_dex_numbersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_number?: IntFilter;
}
