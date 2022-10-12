import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-create-or-connect-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-upsert-with-where-unique-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';
import { pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-update-with-where-unique-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-update-many-with-where-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsScalarWhereInput } from './pokemon-form-pokeathlon-stats-scalar-where.input';

@InputType()
export class pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokemon_formsNestedInput {

    @Field(() => [pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput)
    create?: Array<pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: Array<pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokemon_formsInput)
    upsert?: Array<pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    set?: Array<pokemon_form_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    disconnect?: Array<pokemon_form_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    delete?: Array<pokemon_form_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    connect?: Array<pokemon_form_pokeathlon_statsWhereUniqueInput>;

    @Field(() => [pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokemon_formsInput)
    update?: Array<pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokemon_formsInput)
    updateMany?: Array<pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsScalarWhereInput)
    deleteMany?: Array<pokemon_form_pokeathlon_statsScalarWhereInput>;
}
