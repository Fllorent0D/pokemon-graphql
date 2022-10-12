import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseWhereUniqueInput } from './move-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_proseUpdateWithoutLanguagesInput } from './move-flag-prose-update-without-languages.input';
import { move_flag_proseCreateWithoutLanguagesInput } from './move-flag-prose-create-without-languages.input';

@InputType()
export class move_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_proseWhereUniqueInput)
    where!: move_flag_proseWhereUniqueInput;

    @Field(() => move_flag_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_flag_proseUpdateWithoutLanguagesInput)
    update!: move_flag_proseUpdateWithoutLanguagesInput;

    @Field(() => move_flag_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_flag_proseCreateWithoutLanguagesInput)
    create!: move_flag_proseCreateWithoutLanguagesInput;
}
