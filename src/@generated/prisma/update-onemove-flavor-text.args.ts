import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textUpdateInput } from '../move-flavor-text/move-flavor-text-update.input';
import { Type } from 'class-transformer';
import { move_flavor_textWhereUniqueInput } from '../move-flavor-text/move-flavor-text-where-unique.input';

@ArgsType()
export class UpdateOnemoveFlavorTextArgs {

    @Field(() => move_flavor_textUpdateInput, {nullable:false})
    @Type(() => move_flavor_textUpdateInput)
    data!: move_flavor_textUpdateInput;

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;
}
