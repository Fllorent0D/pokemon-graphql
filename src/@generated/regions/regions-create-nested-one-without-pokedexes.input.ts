import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutPokedexesInput } from './regions-create-or-connect-without-pokedexes.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class regionsCreateNestedOneWithoutPokedexesInput {

    @Field(() => regionsCreateWithoutPokedexesInput, {nullable:true})
    @Type(() => regionsCreateWithoutPokedexesInput)
    create?: regionsCreateWithoutPokedexesInput;

    @Field(() => regionsCreateOrConnectWithoutPokedexesInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: regionsCreateOrConnectWithoutPokedexesInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;
}
