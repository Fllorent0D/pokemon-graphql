import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutPokemon_speciesInput } from './generations-create-without-pokemon-species.input';

@InputType()
export class generationsCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => generationsCreateWithoutPokemon_speciesInput)
    create!: generationsCreateWithoutPokemon_speciesInput;
}
