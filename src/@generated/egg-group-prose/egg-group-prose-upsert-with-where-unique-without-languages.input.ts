import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseWhereUniqueInput } from './egg-group-prose-where-unique.input';
import { Type } from 'class-transformer';
import { egg_group_proseUpdateWithoutLanguagesInput } from './egg-group-prose-update-without-languages.input';
import { egg_group_proseCreateWithoutLanguagesInput } from './egg-group-prose-create-without-languages.input';

@InputType()
export class egg_group_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => egg_group_proseWhereUniqueInput, {nullable:false})
    @Type(() => egg_group_proseWhereUniqueInput)
    where!: egg_group_proseWhereUniqueInput;

    @Field(() => egg_group_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => egg_group_proseUpdateWithoutLanguagesInput)
    update!: egg_group_proseUpdateWithoutLanguagesInput;

    @Field(() => egg_group_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => egg_group_proseCreateWithoutLanguagesInput)
    create!: egg_group_proseCreateWithoutLanguagesInput;
}
