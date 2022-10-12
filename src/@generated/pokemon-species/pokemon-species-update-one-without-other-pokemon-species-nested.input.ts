import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutOther_pokemon_speciesInput } from './pokemon-species-create-without-other-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutOther_pokemon_speciesInput } from './pokemon-species-create-or-connect-without-other-pokemon-species.input';
import { pokemon_speciesUpsertWithoutOther_pokemon_speciesInput } from './pokemon-species-upsert-without-other-pokemon-species.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithoutOther_pokemon_speciesInput } from './pokemon-species-update-without-other-pokemon-species.input';

@InputType()
export class pokemon_speciesUpdateOneWithoutOther_pokemon_speciesNestedInput {

    @Field(() => pokemon_speciesCreateWithoutOther_pokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutOther_pokemon_speciesInput)
    create?: pokemon_speciesCreateWithoutOther_pokemon_speciesInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutOther_pokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutOther_pokemon_speciesInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutOther_pokemon_speciesInput;

    @Field(() => pokemon_speciesUpsertWithoutOther_pokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesUpsertWithoutOther_pokemon_speciesInput)
    upsert?: pokemon_speciesUpsertWithoutOther_pokemon_speciesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutOther_pokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesUpdateWithoutOther_pokemon_speciesInput)
    update?: pokemon_speciesUpdateWithoutOther_pokemon_speciesInput;
}
