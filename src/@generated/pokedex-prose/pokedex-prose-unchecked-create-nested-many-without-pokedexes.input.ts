import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseCreateWithoutPokedexesInput } from './pokedex-prose-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { pokedex_proseCreateOrConnectWithoutPokedexesInput } from './pokedex-prose-create-or-connect-without-pokedexes.input';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';

@InputType()
export class pokedex_proseUncheckedCreateNestedManyWithoutPokedexesInput {

    @Field(() => [pokedex_proseCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseCreateWithoutPokedexesInput)
    create?: Array<pokedex_proseCreateWithoutPokedexesInput>;

    @Field(() => [pokedex_proseCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<pokedex_proseCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    connect?: Array<pokedex_proseWhereUniqueInput>;
}
