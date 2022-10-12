import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesUpdateWithoutNatures_contest_typesTonatures_hates_flavor_idInput } from './contest-types-update-without-natures-contest-types-tonatures-hates-flavor-id.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutNatures_contest_typesTonatures_hates_flavor_idInput } from './contest-types-create-without-natures-contest-types-tonatures-hates-flavor-id.input';

@InputType()
export class contest_typesUpsertWithoutNatures_contest_typesTonatures_hates_flavor_idInput {

    @Field(() => contest_typesUpdateWithoutNatures_contest_typesTonatures_hates_flavor_idInput, {nullable:false})
    @Type(() => contest_typesUpdateWithoutNatures_contest_typesTonatures_hates_flavor_idInput)
    update!: contest_typesUpdateWithoutNatures_contest_typesTonatures_hates_flavor_idInput;

    @Field(() => contest_typesCreateWithoutNatures_contest_typesTonatures_hates_flavor_idInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutNatures_contest_typesTonatures_hates_flavor_idInput)
    create!: contest_typesCreateWithoutNatures_contest_typesTonatures_hates_flavor_idInput;
}
