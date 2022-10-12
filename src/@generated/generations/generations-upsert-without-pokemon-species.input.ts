import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutPokemon_speciesInput } from './generations-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutPokemon_speciesInput } from './generations-create-without-pokemon-species.input';

@InputType()
export class generationsUpsertWithoutPokemon_speciesInput {

    @Field(() => generationsUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutPokemon_speciesInput)
    update!: generationsUpdateWithoutPokemon_speciesInput;

    @Field(() => generationsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => generationsCreateWithoutPokemon_speciesInput)
    create!: generationsCreateWithoutPokemon_speciesInput;
}
