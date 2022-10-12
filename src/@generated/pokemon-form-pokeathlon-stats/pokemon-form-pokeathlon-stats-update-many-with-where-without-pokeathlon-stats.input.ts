import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsScalarWhereInput } from './pokemon-form-pokeathlon-stats-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsUpdateManyMutationInput } from './pokemon-form-pokeathlon-stats-update-many-mutation.input';

@InputType()
export class pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput {

    @Field(() => pokemon_form_pokeathlon_statsScalarWhereInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsScalarWhereInput)
    where!: pokemon_form_pokeathlon_statsScalarWhereInput;

    @Field(() => pokemon_form_pokeathlon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_form_pokeathlon_statsUpdateManyMutationInput)
    data!: pokemon_form_pokeathlon_statsUpdateManyMutationInput;
}
