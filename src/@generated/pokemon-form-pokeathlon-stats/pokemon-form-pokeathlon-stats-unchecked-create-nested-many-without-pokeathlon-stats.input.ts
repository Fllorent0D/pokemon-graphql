import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-create-without-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-create-or-connect-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';

@InputType()
export class pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput {

    @Field(() => [pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput)
    create?: Array<pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput)
    connectOrCreate?: Array<pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    connect?: Array<pokemon_form_pokeathlon_statsWhereUniqueInput>;
}
