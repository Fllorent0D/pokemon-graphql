import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsUpdateInput } from '../move-meta-ailments/move-meta-ailments-update.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsWhereUniqueInput } from '../move-meta-ailments/move-meta-ailments-where-unique.input';

@ArgsType()
export class UpdateOnemoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsUpdateInput, {nullable:false})
    @Type(() => move_meta_ailmentsUpdateInput)
    data!: move_meta_ailmentsUpdateInput;

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    where!: move_meta_ailmentsWhereUniqueInput;
}
