import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutEgg_group_proseInput } from './languages-update-without-egg-group-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEgg_group_proseInput } from './languages-create-without-egg-group-prose.input';

@InputType()
export class languagesUpsertWithoutEgg_group_proseInput {

    @Field(() => languagesUpdateWithoutEgg_group_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutEgg_group_proseInput)
    update!: languagesUpdateWithoutEgg_group_proseInput;

    @Field(() => languagesCreateWithoutEgg_group_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEgg_group_proseInput)
    create!: languagesCreateWithoutEgg_group_proseInput;
}
