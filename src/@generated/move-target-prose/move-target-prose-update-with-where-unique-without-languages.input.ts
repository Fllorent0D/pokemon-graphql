import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_target_proseUpdateWithoutLanguagesInput } from './move-target-prose-update-without-languages.input';

@InputType()
export class move_target_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_target_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_target_proseWhereUniqueInput)
    where!: move_target_proseWhereUniqueInput;

    @Field(() => move_target_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_target_proseUpdateWithoutLanguagesInput)
    data!: move_target_proseUpdateWithoutLanguagesInput;
}
