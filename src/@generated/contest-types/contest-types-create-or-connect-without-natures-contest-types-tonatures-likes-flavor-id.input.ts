import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput } from './contest-types-create-without-natures-contest-types-tonatures-likes-flavor-id.input';

@InputType()
export class contest_typesCreateOrConnectWithoutNatures_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;

    @Field(() => contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput)
    create!: contest_typesCreateWithoutNatures_contest_typesTonatures_likes_flavor_idInput;
}
