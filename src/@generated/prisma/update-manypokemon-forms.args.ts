import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsUpdateManyMutationInput } from '../pokemon-forms/pokemon-forms-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_formsWhereInput } from '../pokemon-forms/pokemon-forms-where.input';

@ArgsType()
export class UpdateManypokemonFormsArgs {

    @Field(() => pokemon_formsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_formsUpdateManyMutationInput)
    data!: pokemon_formsUpdateManyMutationInput;

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    @Type(() => pokemon_formsWhereInput)
    where?: pokemon_formsWhereInput;
}
