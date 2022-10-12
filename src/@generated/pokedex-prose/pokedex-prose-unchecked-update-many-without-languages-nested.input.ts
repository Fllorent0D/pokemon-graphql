import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseCreateWithoutLanguagesInput } from './pokedex-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokedex_proseCreateOrConnectWithoutLanguagesInput } from './pokedex-prose-create-or-connect-without-languages.input';
import { pokedex_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './pokedex-prose-upsert-with-where-unique-without-languages.input';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';
import { pokedex_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './pokedex-prose-update-with-where-unique-without-languages.input';
import { pokedex_proseUpdateManyWithWhereWithoutLanguagesInput } from './pokedex-prose-update-many-with-where-without-languages.input';
import { pokedex_proseScalarWhereInput } from './pokedex-prose-scalar-where.input';

@InputType()
export class pokedex_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokedex_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseCreateWithoutLanguagesInput)
    create?: Array<pokedex_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokedex_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokedex_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokedex_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokedex_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    set?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    disconnect?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    delete?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    connect?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokedex_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokedex_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokedex_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokedex_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokedex_proseScalarWhereInput], {nullable:true})
    @Type(() => pokedex_proseScalarWhereInput)
    deleteMany?: Array<pokedex_proseScalarWhereInput>;
}
