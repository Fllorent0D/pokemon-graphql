import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textWhereUniqueInput } from '../move-flavor-text/move-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateInput } from '../move-flavor-text/move-flavor-text-create.input';
import { move_flavor_textUpdateInput } from '../move-flavor-text/move-flavor-text-update.input';

@ArgsType()
export class UpsertOnemoveFlavorTextArgs {

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;

    @Field(() => move_flavor_textCreateInput, {nullable:false})
    @Type(() => move_flavor_textCreateInput)
    create!: move_flavor_textCreateInput;

    @Field(() => move_flavor_textUpdateInput, {nullable:false})
    @Type(() => move_flavor_textUpdateInput)
    update!: move_flavor_textUpdateInput;
}
