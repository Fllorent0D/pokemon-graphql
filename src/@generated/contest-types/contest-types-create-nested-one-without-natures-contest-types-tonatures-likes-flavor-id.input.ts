import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-create-without-natures-contest-types-tonatures-likes-flavor-id.input';
import { Type } from 'class-transformer';
import { contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-create-or-connect-without-natures-contest-types-tonatures-likes-flavor-id.input';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';

@InputType()
export class contest_typesCreateNestedOneWithoutNatures_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    @Type(() => contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    create?: contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput;

    @Field(() => contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    @Type(() => contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    connectOrCreate?: contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    @Type(() => contest_typesWhereUniqueInput)
    connect?: contest_typesWhereUniqueInput;
}
