import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsWhereInput } from '../pokemon-forms/pokemon-forms-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonFormsArgs {

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    @Type(() => pokemon_formsWhereInput)
    where?: pokemon_formsWhereInput;
}
