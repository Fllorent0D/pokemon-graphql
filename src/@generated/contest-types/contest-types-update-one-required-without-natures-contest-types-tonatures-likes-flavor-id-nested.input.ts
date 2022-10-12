import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-create-without-natures-contest-types-tonatures-likes-flavor-id.input';
import { Type } from 'class-transformer';
import { contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-create-or-connect-without-natures-contest-types-tonatures-likes-flavor-id.input';
import { contest_typesUpsertWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-upsert-without-natures-contest-types-tonatures-likes-flavor-id.input';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { contest_typesUpdateWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-update-without-natures-contest-types-tonatures-likes-flavor-id.input';

@InputType()
export class contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_likes_flavor_idNestedInput {

    @Field(() => contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    @Type(() => contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    create?: contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput;

    @Field(() => contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    @Type(() => contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    connectOrCreate?: contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput;

    @Field(() => contest_typesUpsertWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    @Type(() => contest_typesUpsertWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    upsert?: contest_typesUpsertWithoutNatures_contest_typesTonatures_likes_flavor_idInput;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    @Type(() => contest_typesWhereUniqueInput)
    connect?: contest_typesWhereUniqueInput;

    @Field(() => contest_typesUpdateWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    @Type(() => contest_typesUpdateWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    update?: contest_typesUpdateWithoutNatures_contest_typesTonatures_likes_flavor_idInput;
}
