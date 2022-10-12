import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateWithoutPokedexesInput } from './regions-update-without-pokedexes.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';

@InputType()
export class regionsUpsertWithoutPokedexesInput {

    @Field(() => regionsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => regionsUpdateWithoutPokedexesInput)
    update!: regionsUpdateWithoutPokedexesInput;

    @Field(() => regionsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => regionsCreateWithoutPokedexesInput)
    create!: regionsCreateWithoutPokedexesInput;
}
