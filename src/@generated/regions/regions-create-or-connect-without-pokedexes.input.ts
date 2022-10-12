import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';

@InputType()
export class regionsCreateOrConnectWithoutPokedexesInput {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;

    @Field(() => regionsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => regionsCreateWithoutPokedexesInput)
    create!: regionsCreateWithoutPokedexesInput;
}
