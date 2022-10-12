import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutPokemon_speciesInput } from './generations-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutPokemon_speciesInput } from './generations-create-or-connect-without-pokemon-species.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutPokemon_speciesInput {

    @Field(() => generationsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => generationsCreateWithoutPokemon_speciesInput)
    create?: generationsCreateWithoutPokemon_speciesInput;

    @Field(() => generationsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
