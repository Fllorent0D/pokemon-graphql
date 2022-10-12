import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-create-without-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-create-or-connect-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-upsert-with-where-unique-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';
import { pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-update-with-where-unique-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput } from './pokemon-form-pokeathlon-stats-update-many-with-where-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsScalarWhereInput } from './pokemon-form-pokeathlon-stats-scalar-where.input';

@InputType()
export class pokemon_form_pokeathlon_statsUncheckedUpdateManyWithoutPokeathlon_statsNestedInput {

    @Field(() => [pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput)
    create?: Array<pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput)
    connectOrCreate?: Array<pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokeathlon_statsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput)
    upsert?: Array<pokemon_form_pokeathlon_statsUpsertWithWhereUniqueWithoutPokeathlon_statsInput>;

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

    @Field(() => [pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput)
    update?: Array<pokemon_form_pokeathlon_statsUpdateWithWhereUniqueWithoutPokeathlon_statsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput)
    updateMany?: Array<pokemon_form_pokeathlon_statsUpdateManyWithWhereWithoutPokeathlon_statsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsScalarWhereInput)
    deleteMany?: Array<pokemon_form_pokeathlon_statsScalarWhereInput>;
}
