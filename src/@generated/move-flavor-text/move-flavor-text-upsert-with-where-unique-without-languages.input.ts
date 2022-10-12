import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_textUpdateWithoutLanguagesInput } from './move-flavor-text-update-without-languages.input';
import { move_flavor_textCreateWithoutLanguagesInput } from './move-flavor-text-create-without-languages.input';

@InputType()
export class move_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;

    @Field(() => move_flavor_textUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_flavor_textUpdateWithoutLanguagesInput)
    update!: move_flavor_textUpdateWithoutLanguagesInput;

    @Field(() => move_flavor_textCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_flavor_textCreateWithoutLanguagesInput)
    create!: move_flavor_textCreateWithoutLanguagesInput;
}
