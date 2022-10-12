import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutPokemon_speciesInput } from './generations-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutPokemon_speciesInput } from './generations-create-or-connect-without-pokemon-species.input';
import { generationsUpsertWithoutPokemon_speciesInput } from './generations-upsert-without-pokemon-species.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutPokemon_speciesInput } from './generations-update-without-pokemon-species.input';

@InputType()
export class generationsUpdateOneWithoutPokemon_speciesNestedInput {

    @Field(() => generationsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => generationsCreateWithoutPokemon_speciesInput)
    create?: generationsCreateWithoutPokemon_speciesInput;

    @Field(() => generationsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => generationsUpsertWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutPokemon_speciesInput)
    upsert?: generationsUpsertWithoutPokemon_speciesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutPokemon_speciesInput)
    update?: generationsUpdateWithoutPokemon_speciesInput;
}
