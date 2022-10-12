import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseCreateWithoutLanguagesInput } from './pokedex-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokedex_proseCreateOrConnectWithoutLanguagesInput } from './pokedex-prose-create-or-connect-without-languages.input';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';

@InputType()
export class pokedex_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokedex_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseCreateWithoutLanguagesInput)
    create?: Array<pokedex_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokedex_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokedex_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    connect?: Array<pokedex_proseWhereUniqueInput>;
}
